# hugo-theme-blank

This is a theme I personally use.

## Multi Section Supports

If you use multi sections (with the concept from hugo), the RSS at bottom and *Recent* at side are ready for displaying those content. However, you will need to set up your menu at `config.toml` to point the hyperlink to proper destination.

If you want to re-order those sections, you need a `_index.md` at the directory of the section to set proper weight at front matter, just alike what was done at the exampleSite, see `/exampleSite/content/essays/_index.md`. See the predefined variable `weight` at [docs](https://gohugo.io/content-management/front-matter/#front-matter-variables).

**Note** that separating taxonomies according to different sections is not implemented yet. So better to only use taxonomies inside a specific section.

For a better understand, if you have to posts *A* and *B* in section *S1* and *S2*, both of the posts has the same tag *T1*, like the follow.

```
post A: section S1, tag T1, tag T2
post B: section S2, tag T2
```

When you open the index page of *T1*, there will be two posts, rathor than post *A* when you are in section *S1* and post *B* when you are in section *S2*.

```
tag T1: post A, post B
tag T2: post A
```

## Special Thanks

The wordpress theme [Allium](https://wordpress.org/themes/allium/), and [here](https://templatelens.com/allium/) is its home page. I like this theme very much when I'm using wordpress, but I don't have it on hugo, so I try my best to write a theme similar with it. There are many designs in this theme refers to it.

The hugo theme [jane](https://github.com/xianmin/hugo-theme-jane) and [mini](https://github.com/nodejh/hugo-theme-mini/), this is my first time to write a hugo theme, I referred this two themes' project structure and way of handling problems.
