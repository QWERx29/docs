import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as i,a as e,b as o,d as a,e as r,r as d}from"./app.073805c3.js";const c={},h=e("h1",{id:"geany",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#geany","aria-hidden":"true"},"#"),a(" Geany")],-1),l=e("p",null,"Geany \u662F\u4E00\u4E2A\u8F7B\u91CF\u3001\u4FBF\u6377\u7684\u7F16\u8F91\u5668\uFF0C\u5BF9\u4E8E Linux \u73AF\u5883\u4E0B\u7684\u521D\u5B66\u8005\u8F83\u4E3A\u53CB\u597D\u3002",-1),f=e("p",null,"\u4E0E Dev-C++ \u4E00\u6837\uFF0C\u5B83\u53EF\u4EE5\u7F16\u8BD1\u8FD0\u884C\u5355\u4E2A\u6587\u4EF6\u3002",-1),p=e("p",null,"\u4E0D\u8FC7\uFF0C\u5B83\u53EF\u4EE5\u5728 Linux/Windows/macOS \u4E0B\u8FD0\u884C\u3002",-1),u=a("\u5176\u5B98\u7F51\u4E3A\uFF1A"),_={href:"https://geany.org/",target:"_blank",rel:"noopener noreferrer"},g=a("https://geany.org/"),m=r(`<h2 id="\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> \u4F18\u7F3A\u70B9</h2><h3 id="\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4F18\u70B9" aria-hidden="true">#</a> \u4F18\u70B9</h3><ol><li>\u8F7B\u91CF\uFF1B</li><li>\u53EF\u4EE5\u7F16\u8BD1\u8FD0\u884C\u5355\u4E2A\u6587\u4EF6\uFF1B</li><li>\u4E0D\u9700\u8981\u592A\u591A\u914D\u7F6E\uFF1B</li><li>\u8DE8\u5E73\u53F0\u3002</li></ol><h3 id="\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u70B9" aria-hidden="true">#</a> \u7F3A\u70B9</h3><ol><li>\u6CA1\u6709\u592A\u591A\u4EBA\u4F7F\u7528\uFF1B</li><li>\u5728 macOS Catalina \u4E0B\u6709\u4E00\u4E9B\u6743\u9650\u95EE\u9898<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>\uFF1B</li><li>\u65B0\u5EFA\u6587\u4EF6\u65F6\uFF0C\u9ED8\u8BA4\u4E0D\u4F1A\u6709\u8BED\u6CD5\u9AD8\u4EAE\uFF0C\u9700\u8981\u624B\u52A8\u5207\u6362\u6587\u4EF6\u7C7B\u578B\u3002</li></ol><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><h3 id="windows-macos" tabindex="-1"><a class="header-anchor" href="#windows-macos" aria-hidden="true">#</a> Windows/macOS</h3><p>\u5728\u5B98\u7F51\u4E0A\u4E0B\u8F7D\u5B89\u88C5\u5305\u5B89\u88C5</p><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h3><h4 id="\u65B9\u6CD5\u4E00" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E00" aria-hidden="true">#</a> \u65B9\u6CD5\u4E00</h4><p>\u4F7F\u7528\u5305\u7BA1\u7406\u5668\u8FDB\u884C\u5B89\u88C5\uFF0C\u5982\u5728 Ubuntu \u6216 NOI Linux \u4E2D\uFF0C\u8FD0\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> geany
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u65B9\u6CD5\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u4E8C" aria-hidden="true">#</a> \u65B9\u6CD5\u4E8C</h4><ol><li>\u4ECE\u5B98\u7F51\u4E0B\u8F7D\u6E90\u7801</li><li>\u7EC8\u7AEF\u4E0B\u8FD0\u884C\uFF1A</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./configure
<span class="token function">make</span>
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u9047\u5230 <code>No package &#39;gtk+-2.0&#39; found</code> \u53EF\u80FD\u9700\u8981\u5B89\u88C5 <code>libgtk2.0-dev</code>\u3002</p><h2 id="\u4F7F\u7528\u6280\u5DE7" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6280\u5DE7" aria-hidden="true">#</a> \u4F7F\u7528\u6280\u5DE7</h2><h3 id="\u5207\u6362\u6587\u4EF6\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362\u6587\u4EF6\u7C7B\u578B" aria-hidden="true">#</a> \u5207\u6362\u6587\u4EF6\u7C7B\u578B</h3><p>\u5728<em>\u6587\u6863 -&gt; \u8BBE\u7F6E\u6587\u4EF6\u7C7B\u578B</em>\u4E2D\u8FDB\u884C\u5207\u6362\u3002</p><p>\u5982 C++ \u8BED\u8A00\uFF0C\u70B9\u51FB<em>\u6587\u6863 -&gt; \u8BBE\u7F6E\u6587\u4EF6\u7C7B\u578B -&gt; \u7F16\u7A0B\u8BED\u8A00 -&gt; C++ \u6E90\u6587\u4EF6</em>\uFF0C\u5373\u53EF\u770B\u5230\u6587\u4EF6\u5DF2\u88AB\u8F6C\u6362\u4E3A C++ \u8BED\u8A00\u7684\u8BED\u6CD5\u9AD8\u4EAE\u4E86\u3002</p><h3 id="\u8BBE\u7F6E\u6587\u4EF6\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u6587\u4EF6\u6A21\u677F" aria-hidden="true">#</a> \u8BBE\u7F6E\u6587\u4EF6\u6A21\u677F</h3><p>\u5728\u914D\u7F6E\u6587\u4EF6\u76EE\u5F55\u4E0B\u5EFA\u7ACB templates/files \u6587\u4EF6\u5939\uFF0C\u5EFA\u7ACB\u5728\u5176\u4E2D\u7684\u6587\u4EF6\u5373\u4E3A\u6A21\u677F\u6587\u4EF6\uFF0C\u518D\u6B21\u6253\u5F00 Geany\uFF0C\u5C31\u53EF\u4EE5\u5728<em>\u6587\u4EF6 -&gt; \u4ECE\u6A21\u677F\u65B0\u5EFA</em>\u4E2D\u627E\u5230\u5B83\u4E86\u3002</p><p>\u914D\u7F6E\u6587\u4EF6\u76EE\u5F55\u53EF\u4EE5\u901A\u8FC7<em>\u5E2E\u52A9 -&gt; \u8C03\u8BD5\u4FE1\u606F</em>\u7684\u7B2C\u4E8C\u3001\u4E09\u884C\u627E\u51FA\u3002</p><p>\u8FD9\u91CC\u7ED9\u51FA macOS \u548C Linux \u4E0B\u7684\u9ED8\u8BA4\u6A21\u677F\u914D\u7F6E\u6587\u4EF6\u76EE\u5F55\uFF1A</p><ul><li>\u7CFB\u7EDF\u76EE\u5F55\uFF1A<code>/usr/share/geany/templates/files/</code></li><li>\u7528\u6237\u76EE\u5F55\uFF1A<code>~/.config/geany/templates/files/</code><sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></li></ul><h2 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h2><h3 id="\u517C\u5BB9\u6DF1\u5EA6\u7EC8\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u517C\u5BB9\u6DF1\u5EA6\u7EC8\u7AEF" aria-hidden="true">#</a> \u517C\u5BB9\u6DF1\u5EA6\u7EC8\u7AEF</h3><p>\u5728<em>\u9996\u9009\u9879 -&gt; \u5DE5\u5177 -&gt; \u865A\u62DF\u7EC8\u7AEF</em>\uFF0C\u4FEE\u6539\u7EC8\u7AEF\u7684\u547D\u4EE4\u4E3A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>deepin-terminal -x <span class="token string">&quot;/bin/sh&quot;</span> %c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u70B9\u51FB\u201C\u5E94\u7528\u201D\u6309\u94AE\u5373\u53EF\u3002<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup></p><h2 id="\u53C2\u8003\u8D44\u6599\u4E0E\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599\u4E0E\u6CE8\u91CA" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599\u4E0E\u6CE8\u91CA</h2><hr class="footnotes-sep">`,32),b={class:"footnotes"},x={class:"footnotes-list"},k={id:"footnote1",class:"footnote-item"},v=a("\u8BE6\u89C1\uFF1A"),y={href:"https://github.com/geany/geany/issues/2344",target:"_blank",rel:"noopener noreferrer"},w=a("https://github.com/geany/geany/issues/2344"),L=a(),C=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"\u21A9\uFE0E",-1),N={id:"footnote2",class:"footnote-item"},O=a("\u6765\u6E90\uFF1A"),S={href:"https://wiki.geany.org/config/templates",target:"_blank",rel:"noopener noreferrer"},V=a("https://wiki.geany.org/config/templates"),B=a(),E=e("a",{href:"#footnote-ref2",class:"footnote-backref"},"\u21A9\uFE0E",-1),G={id:"footnote3",class:"footnote-item"},I=a("\u6765\u6E90\uFF1ADeepin Wiki "),W={href:"https://wiki.deepin.org/",target:"_blank",rel:"noopener noreferrer"},q=a("https://wiki.deepin.org/"),D=a(),T=e("a",{href:"#footnote-ref3",class:"footnote-backref"},"\u21A9\uFE0E",-1);function U(j,z){const n=d("ExternalLinkIcon");return t(),i("div",null,[h,l,f,p,e("p",null,[u,e("a",_,[g,o(n)])]),m,e("section",b,[e("ol",x,[e("li",k,[e("p",null,[v,e("a",y,[w,o(n)]),L,C])]),e("li",N,[e("p",null,[O,e("a",S,[V,o(n)]),B,E])]),e("li",G,[e("p",null,[I,e("a",W,[q,o(n)]),D,T])])])])])}var H=s(c,[["render",U],["__file","geany.html.vue"]]);export{H as default};