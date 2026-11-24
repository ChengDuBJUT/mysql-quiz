# -*- coding: utf-8 -*-
import json, io, sys, os, importlib.util

BASE = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location('ext', os.path.join(BASE, 'expand_ch04.py'))
ext = importlib.util.module_from_spec(spec)
spec.loader.exec_module(ext)

data = json.load(io.open(os.path.join(BASE, 'source', 'ch04.json'), encoding='utf-8'))
qs = data['questions']

# 原题 -> (section, point)
OLD = {
    'ch4-ppt-s01': ('1', 'select语句'),
    'ch4-ppt-s02': ('1', '查询所有列'),
    'ch4-ppt-b01': ('1', 'select语句'),
    'ch4-ppt-b02': ('1', '查询所有列'),
    'ch4-ppt-s03': ('2.1', 'distinct'),
    'ch4-ppt-b03': ('2.1', 'distinct'),
    'ch4-ppt-s04': ('2.2', 'like查询'),
    'ch4-ppt-s05': ('2.3', 'order by'),
    'ch4-ppt-b04': ('2.3', 'order by'),
    'ch4-ppt-s06': ('3.1', '聚合函数'),
    'ch4-ppt-s07': ('4.5', 'union'),
    'ch4-ppt-s08': ('5.5', 'with'),
    'ch4-ppt-b05': ('4.4', '连接条件数'),
    'ch4-ppt-b06': ('6', '^'),
}

# 新题按顺序与 NEW 对齐（id 由生成顺序决定）
new_qs = qs[len(OLD):]
assert len(new_qs) == len(ext.NEW), (len(new_qs), len(ext.NEW))
cover = {}
for (sec, pt, _), q in zip(ext.NEW, new_qs):
    cover.setdefault(sec, set()).add(pt)
for qid, (sec, pt) in OLD.items():
    cover.setdefault(sec, set()).add(pt)

print('总题量:', len(qs))
s = sum(1 for q in qs if q['type'] == 'single')
b = sum(1 for q in qs if q['type'] == 'blank')
print('单选:', s, '填空:', b, '单选占比: %.1f%%' % (s * 100.0 / len(qs)))
print('id 唯一:', len({q['id'] for q in qs}) == len(qs))
print('选项格式/答案合法:', all(
    (len(q['options']) == 4 and all(q['options'][i].startswith(c + '. ') for i, c in enumerate('ABCD'))
     and q['answer'] in 'ABCD') for q in qs if q['type'] == 'single'))

cnt = {}
for qid, (sec, pt) in OLD.items():
    cnt[sec] = cnt.get(sec, 0) + 1
for (sec, pt, _) in ext.NEW:
    cnt[sec] = cnt.get(sec, 0) + 1
print('有题覆盖 section 数:', len([k for k, v in cnt.items() if v > 0]), '/', len(data['sections']))
short = {k: v for k, v in cnt.items() if v < 4}
print('不足4题的 section:', short)

missing = {}
for sec in data['sections']:
    allp = [p['term'] for p in sec['points']]
    lack = [t for t in allp if t not in cover.get(sec['id'], set())]
    if lack:
        missing[sec['id']] = lack
print('未覆盖知识点:', missing if missing else '无')
print('每节题数:', dict(sorted(cnt.items())))
print('答案字母分布:', {c: sum(1 for q in qs if q.get('answer') == c) for c in 'ABCD'})
print('page 缺失:', [q['id'] for q in qs if 'page' not in q])
