webpackJsonp([4],{"Sgn/":function(t,e,n){"use strict";e.b=function(){var t=s()({},r.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq"});return Object(a.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,r.c)},e.a=function(t){var e=s()({},r.b,{hostUin:0,needNewCode:0,platform:"yqq",order:"listen",begin:0,num:80,songstatus:1,singermid:t});return Object(a.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",e,r.c)};var i=n("aA9S"),s=n.n(i),a=n("Gak4"),r=n("T452")},lEJ1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("4YfN"),s=n.n(i),a=n("fUgm"),r=n("Sgn/"),c=n("T452"),o=n("PvFA"),u=n("kvay"),g={data:function(){return{songs:[]}},computed:s()({title:function(){return this.singer.name},bgImage:function(){return this.singer.avatar}},Object(a.c)(["singer"])),created:function(){this._getDetail()},methods:{_getDetail:function(){var t=this;this.singer.id?Object(r.a)(this.singer.id).then(function(e){e.code===c.a&&Object(o.d)(t._normalizeSongs(e.data.list)).then(function(e){t.songs=e})}):this.$router.push("/singer")},_normalizeSongs:function(t){var e=[];return t.forEach(function(t){var n=t.musicData;Object(o.c)(n)&&e.push(Object(o.a)(n))}),e}},components:{MusicList:u.a}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"slide"}},[e("music-list",{attrs:{songs:this.songs,"bg-image":this.bgImage,title:this.title}})],1)},staticRenderFns:[]};var l=n("C7Lr")(g,f,!1,function(t){n("xRrO")},"data-v-f1e1eeb4",null);e.default=l.exports},xRrO:function(t,e){}});
//# sourceMappingURL=4.e12c17032e6cbf6a90e2.js.map