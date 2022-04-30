# Filters

### Ref

https://www.npmjs.com/package/api-query-params

```
MongoDB	URI	Example	Result

$eq	key=val	type=public	{filter: {type: 'public'}}
$gt	key>val	count>5	{filter: {count: {$gt: 5}}}
$gte	key>=val	rating>=9.5	{filter: {rating: {$gte: 9.5}}}
$lt	key<val	createdAt<2016-01-01	{filter: {createdAt: {$lt: Fri Jan 01 2016 01:00:00 GMT+0100 (CET)}}}
$lte	key<=val	score<=-5	{filter: {score: {$lte: -5}}}
$ne	key!=val	status!=success	{filter: {status: {$ne: 'success'}}}
$in	key=val1,val2	country=GB,US	{filter: {country: {$in: ['GB', 'US']}}}
$nin	key!=val1,val2	lang!=fr,en	{filter: {lang: {$nin: ['fr', 'en']}}}
$exists	key	phone	{filter: {phone: {$exists: true}}}
$exists	!key	!email	{filter: {email: {$exists: false}}}
$regex	key=/value/<opts>	email=/@gmail\.com$/i	{filter: {email: /@gmail.com$/i}}
$regex	key!=/value/<opts>	phone!=/^06/	{filter: {phone: { $not: /^06/}}}

```