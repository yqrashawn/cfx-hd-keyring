# batch generate 10 hd wallets

the script will generate 10 hd wallets and print their mnemonic and pubkey and address of its first account

``` shell
$ node index.js
mnemonic,private key, address
buyer fruit asthma check cigar dwarf use upon visit online exchange frown, 0x80f19fc40fae6c4c9b36395956df2cb2fb8bb920d60b444b436702c69c665381,0x1eb302bf08d9c19b2f480c5a700cba08c018678e
property umbrella salad rotate strategy appear uniform divide list hole vicious caught, 0x7e8ae285647b056a78700c47292af0a50dfcb33243a9028a41948a1d9e7517a8,0x151594b6f50232913fc7614540a9dcbf92cc5960
fatal finger attitude angry envelope foot civil hurry color dismiss recycle wish, 0x1841c76ca6f047d4a9c75fad167c8f0104101e1d755c245c8313a1db302518b9,0x11c01e738247b03c18ffde9ca1dbf5941bc31794
deer merit elevator van rural typical model dice cricket surge trim believe, 0xffcd4c3dcec0cc67a2f218490ab32f70ad7b435512600a825e7e0efb405e4425,0x1b44d34d396a05a043d7b34ccab04922cf1656c4
thunder blanket jaguar same equal key chair route lottery same copy donate, 0x1fcd02cebad41a9b87fe6b691cf9cb714d1b749835502063f72068318e5cf15c,0x1422ed92f118d554c70d5668cc634920f7b8e584
science minute produce vintage clump brother next behind normal pave mansion tip, 0xb39e694e3dd30a3cf2c477c9235ba460b12549d69f942300d3e044c642057751,0x108e3cbc4008c801a09002e067ba88ec8cdc866d
balance photo toe vessel wolf lobster stool cattle twist spread govern model, 0x47d9f361466f36dc4f992ab3f1aeccf66724efde85a7f5c4011e418c764b51d5,0x10c5a56f4d0145372097e2a41d95abcb898760f3
diesel deer volcano connect wonder wing initial day enough mirror impulse senior, 0x5ccc70974e2cfce74cc758037ea231135f8457d870a191854f237f9bb4392ee7,0x13a3956627ad31c8c9da0479b94cd03d311aab7b
science aerobic boost company desert level embark rocket apple poem lonely kidney, 0x2964bc83013dea8fb4aa952a2201c0a13ceba61d921ce09970da5081957dfdcf,0x195f626feae737a968f940f20d540d6f2edd201d
garage control oppose stock slight torch olive parade airport bag ecology rich, 0x817328ee6841b427dfa2f1c294611dcf71b91ed6dc25f146514741b1b3d19440,0x1f127be98ecca168242d6ce2a3ba58b00cf88255
```

can pipe the result to a csv file

``` shell
$ node index.js > hd-wallets.csv
```