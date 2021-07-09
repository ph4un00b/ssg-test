---
title: My first post
slug: my-first-post
summary: A little summary about my first post
author: michael
published: 2016-06-22
---

This is the **Markdown** content that will automatically be inserted into the
`content` field of the model instance, because the `content` field is of type
`Content` (which, by the way, is translated into a SQLite `TEXT` field in the
in-memory database).

* Note the YAML "preamble" at the beginning of the Markdown file, started and ended with three dashes (---).

* Also note how the author field simply has the name michael attached to it. Under the hood, this is the primary key reference to the relevant Author model instance to attach to this Post instance (i.e. this refers to our earlier defined michael.yml instance).