import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as u,a as n,b as a,w as e,d as s,e as l,r as p}from"./app.2d48c0a5.js";const r={},d=n("h1",{id:"validator",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#validator","aria-hidden":"true"},"#"),s(" Validator")],-1),k=s("\u524D\u7F6E\u77E5\u8BC6\uFF1A"),h=s("\u901A\u7528"),m=l('<p>\u672C\u9875\u9762\u5C06\u7B80\u8981\u4ECB\u7ECD validator \u7684\u6982\u5FF5\u4E0E\u7528\u6CD5\u3002</p><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>Validator\uFF08\u4E2D\u6587\uFF1A\u6821\u9A8C\u5668\uFF09\u7528\u4E8E\u68C0\u9A8C\u9020\u597D\u7684\u6570\u636E\u7684\u5408\u6CD5\u6027\u3002\u5F53\u9020\u597D\u4E00\u9053\u9898\u7684\u6570\u636E\uFF0C\u53C8\u62C5\u5FC3\u6570\u636E\u4E0D\u5408\u6CD5\uFF08\u4E0D\u7B26\u5408\u9898\u76EE\u7684\u9650\u5236\u6761\u4EF6\uFF1A\u4E0A\u6EA2\u3001\u56FE\u4E0D\u8FDE\u901A\u3001\u4E0D\u662F\u6811\u2026\u2026\uFF09\u65F6\uFF0C\u51FA\u9898\u8005\u901A\u5E38\u4F1A\u501F\u52A9 validator \u6765\u68C0\u67E5\u3002<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p>',3),_=s("\u56E0\u4E3A Coderforces \u652F\u6301 hack \u529F\u80FD\uFF0C\u6240\u4EE5\u6240\u6709 Codeforces \u4E0A\u7684\u9898\u76EE\u90FD\u5FC5\u987B\u8981\u6709 validator\u3002UOJ \u4E5F\u5982\u6B64\u3002"),v=s("Polygon"),f=s(" \u5185\u5EFA\u4E86\u5BF9 validator \u7684\u652F\u6301\u3002"),b=n("h2",{id:"\u4F7F\u7528\u65B9\u6CD5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4F7F\u7528\u65B9\u6CD5","aria-hidden":"true"},"#"),s(" \u4F7F\u7528\u65B9\u6CD5")],-1),g=n("p",null,[s("\u76F4\u63A5\u5728\u547D\u4EE4\u884C\u8F93\u5165 "),n("code",null,"./val"),s(" \u5373\u53EF\u3002\u6570\u636E\u901A\u8FC7 stdin \u8F93\u5165\u3002\u5982\u679C\u60F3\u4ECE\u6587\u4EF6\u8F93\u5165\u53EF "),n("code",null,"./val < a.in"),s("\u3002")],-1),x=n("p",null,"\u82E5\u6570\u636E\u6CA1\u6709\u95EE\u9898\uFF0C\u5219\u4EC0\u4E48\u90FD\u4E0D\u4F1A\u8F93\u51FA\u4E14\u8FD4\u56DE 0\uFF1B\u5426\u5219\u4F1A\u8F93\u51FA\u9519\u8BEF\u4FE1\u606F\u5E76\u8FD4\u56DE\u4E00\u4E2A\u975E 0 \u503C\u3002",-1),w=n("h2",{id:"\u63D0\u793A",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u63D0\u793A","aria-hidden":"true"},"#"),s(" \u63D0\u793A")],-1),y=n("ul",null,[n("li",null,[s("\u5199 validator \u65F6\uFF0C\u4E0D\u80FD\u5BF9\u88AB validate \u7684\u6570\u636E\u505A\u4EFB\u4F55\u5047\u8BBE\uFF0C\u56E0\u4E3A\u5B83\u53EF\u80FD\u5305\u542B\u4EFB\u4F55\u5185\u5BB9\u3002\u56E0\u6B64\uFF0C\u51FA\u9898\u8005\u8981\u5BF9\u5404\u79CD\u4E0D\u5408\u6CD5\u7684\u60C5\u51B5\u8FDB\u884C\u5224\u65AD\uFF08\u4F7F\u7528 Testlib \u4F1A\u5927\u5927\u7B80\u5316\u8FD9\u4E00\u6D41\u7A0B\uFF09\u3002 "),n("ul",null,[n("li",null,[s("\u4F8B\u5982\uFF0C\u8F93\u5165\u4E00\u4E2A\u70B9\u6570\u4E3A "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n")]),n("annotation",{encoding:"application/x-tex"},"n")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4306em"}}),n("span",{class:"mord mathnormal"},"n")])])]),s(" \u7684\u6811\uFF0C\u4E3B\u8981\u5DE5\u4F5C\u662F\u5224\u65AD "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n")]),n("annotation",{encoding:"application/x-tex"},"n")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4306em"}}),n("span",{class:"mord mathnormal"},"n")])])]),s(" \u662F\u5426\u7B26\u5408\u8303\u56F4\u548C\u5224\u65AD\u8F93\u5165\u7684\u662F\u6811\u4E0E\u5426\u3002\u4F46\u662F\u5207\u4E0D\u53EF\u5728\u5224\u65AD\u8FC7 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n")]),n("annotation",{encoding:"application/x-tex"},"n")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.4306em"}}),n("span",{class:"mord mathnormal"},"n")])])]),s(" \u8303\u56F4\u4E4B\u540E\u5C31\u4E0D\u5BF9\u63A5\u4E0B\u6765\u8F93\u5165\u7684\u8FB9\u7684\u8D77\u70B9\u4E0E\u7EC8\u70B9\u7684\u8303\u56F4\u8FDB\u884C\u5224\u65AD\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u5BFC\u81F4 validator RE\u3002")]),n("li",null,[s("\u5373\u4F7F\u4E0D\u4F1A RE \u4E5F\u4E0D\u5E94\u8BE5\u4E0D\u5224\u65AD\uFF0C\u8FD9\u4F1A\u5BFC\u81F4\u4F60\u7684\u62A5\u9519\u4E0D\u6B63\u786E\u3002\u5982\u4E0A\u4F8B\uFF0C\u5982\u679C\u4E0D\u5224\u65AD\uFF0C\u62A5\u9519\u53EF\u80FD\u4F1A\u662F\u201C\u4E0D\u662F\u4E00\u68F5\u6811\u201D\uFF0C\u4F46\u662F\u6B63\u786E\u7684\u62A5\u9519\u5E94\u5F53\u662F\u201C\u8FB9\u8D77\u70B9/\u7EC8\u70B9\u4E0D\u5728 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mo",{stretchy:"false"},"["),n("mn",null,"1"),n("mo",{separator:"true"},","),n("mi",null,"n"),n("mo",{stretchy:"false"},"]")]),n("annotation",{encoding:"application/x-tex"},"[1,n]")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mopen"},"["),n("span",{class:"mord"},"1"),n("span",{class:"mpunct"},","),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},"]")])])]),s(" \u4E4B\u95F4\u201D\u3002")])])]),n("li",null,[s("\u4E0D\u80FD\u5BF9\u9009\u624B\u7684\u8BFB\u5165\u65B9\u5F0F\u505A\u4EFB\u4F55\u5047\u8BBE\u3002\u56E0\u6B64\uFF0C\u5FC5\u987B\u4FDD\u8BC1\u80FD\u901A\u8FC7 validate \u7684\u6570\u636E\u5B8C\u5168\u7B26\u5408\u8F93\u5165\u683C\u5F0F\u3002 "),n("ul",null,[n("li",null,"\u4F8B\u5982\uFF0C\u9009\u624B\u53EF\u80FD\u9010\u5B57\u7B26\u5730\u8BFB\u5165\u6570\u5B57\uFF0C\u5728\u6570\u5B57\u4E0E\u6570\u5B57\u4E4B\u95F4\u53EA\u8BFB\u5165\u4E00\u4E2A\u7A7A\u683C\u3002\u6240\u4EE5\u5728\u7F16\u5199 validator \u65F6\uFF0C\u6570\u636E\u4E2D\u7684\u6BCF\u4E00\u4E2A\u7A7A\u767D\u5B57\u7B26\u90FD\u8981\u5728 validator \u4E2D\u663E\u5F0F\u5730\u8BFB\u5165\uFF08\u5982\u7A7A\u683C\u548C\u6362\u884C\uFF09\u3002")])]),n("li",null,[s("\u7ED3\u675F\u65F6\u4E0D\u8981\u5FD8\u8BB0 "),n("code",null,"inf.readEof()"),s("\u3002")]),n("li",null,[s("\u5982\u679C\u9898\u76EE\u5F00\u653E hack\uFF08\u6216\u8005\u8BF4\uFF0Cvalidator \u7684\u9519\u8BEF\u4FE1\u606F\u4F1A\u7ED9\u522B\u4EBA\u770B\uFF09\uFF0C\u8BF7\u4F7F\u62A5\u9519\u4FE1\u606F\u5C3D\u91CF\u53CB\u597D\u3002 "),n("ul",null,[n("li",null,"\u8BFB\u5165\u53D8\u91CF\u65F6\u4F7F\u7528\u201C\u9879\u522B\u540D\u201D\u3002"),n("li",null,"\u5728\u5224\u65AD\u4F7F\u7528\u7684\u8868\u8FBE\u5F0F\u4E0D\u90A3\u4E48\u6613\u61C2\u65F6\uFF0C\u4F7F\u7528 ensuref \u800C\u975E ensure\u3002")])])],-1),M=n("h2",{id:"\u793A\u4F8B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u793A\u4F8B","aria-hidden":"true"},"#"),s(" \u793A\u4F8B")],-1),q=s("\u4EE5\u4E0B\u662F "),E={href:"https://codeforces.com/gym/100541/problem/A",target:"_blank",rel:"noopener noreferrer"},C=s("CF Gym 100541A - Stock Market"),V=s(" \u7684 validator\uFF1A"),I=l(`<div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;testlib.h&quot;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">registerValidation</span><span class="token punctuation">(</span>argc<span class="token punctuation">,</span> argv<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> testCount <span class="token operator">=</span> inf<span class="token punctuation">.</span><span class="token function">readInt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&quot;testCount&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  inf<span class="token punctuation">.</span><span class="token function">readEoln</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> testCount<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> n <span class="token operator">=</span> inf<span class="token punctuation">.</span><span class="token function">readInt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">&quot;n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    inf<span class="token punctuation">.</span><span class="token function">readSpace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    inf<span class="token punctuation">.</span><span class="token function">readInt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1000000</span><span class="token punctuation">,</span> <span class="token string">&quot;w&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    inf<span class="token punctuation">.</span><span class="token function">readEoln</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      inf<span class="token punctuation">.</span><span class="token function">readInt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token string">&quot;p_i&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> inf<span class="token punctuation">.</span><span class="token function">readSpace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    inf<span class="token punctuation">.</span><span class="token function">readEoln</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  inf<span class="token punctuation">.</span><span class="token function">readEof</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5916\u90E8\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u5916\u90E8\u94FE\u63A5" aria-hidden="true">#</a> \u5916\u90E8\u94FE\u63A5</h2>`,2),L={href:"https://github.com/MikeMirzayanov/testlib/tree/master/validators",target:"_blank",rel:"noopener noreferrer"},z=s("Validator \u7684\u66F4\u591A\u793A\u4F8B"),N={href:"https://github.com/MikeMirzayanov/testlib",target:"_blank",rel:"noopener noreferrer"},R=n("code",null,"testlib.h",-1),S=s(" \u7684 GitHub \u5B58\u50A8\u5E93 MikeMirzayanov/testlib"),B=n("h2",{id:"\u53C2\u8003\u8D44\u6599\u4E0E\u6CE8\u91CA",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53C2\u8003\u8D44\u6599\u4E0E\u6CE8\u91CA","aria-hidden":"true"},"#"),s(" \u53C2\u8003\u8D44\u6599\u4E0E\u6CE8\u91CA")],-1),O=n("hr",{class:"footnotes-sep"},null,-1),A={class:"footnotes"},G={class:"footnotes-list"},T={id:"footnote1",class:"footnote-item"},F={href:"https://codeforces.com/blog/entry/18426",target:"_blank",rel:"noopener noreferrer"},H=s("Validators with testlib.h - Codeforces"),J=s(),P=n("a",{href:"#footnote-ref1",class:"footnote-backref"},"\u21A9\uFE0E",-1);function U(j,D){const o=p("RouterLink"),t=p("ExternalLinkIcon");return i(),u("div",null,[d,n("p",null,[k,a(o,{to:"/zh/OI-wiki/tools/testlib/general.html"},{default:e(()=>[h]),_:1})]),m,n("p",null,[_,a(o,{to:"/zh/OI-wiki/tools/polygon.html"},{default:e(()=>[v]),_:1}),f]),b,g,x,w,y,M,n("p",null,[q,n("a",E,[C,a(t)]),V]),I,n("ul",null,[n("li",null,[n("a",L,[z,a(t)])]),n("li",null,[n("a",N,[R,S,a(t)])])]),B,O,n("section",A,[n("ol",G,[n("li",T,[n("p",null,[n("a",F,[H,a(t)]),J,P])])])])])}var W=c(r,[["render",U],["__file","validator.html.vue"]]);export{W as default};