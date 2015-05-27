# Hello World

## Run

```
npm i
npm run dev
```

## Notes

- `baseURL` in config must be removed.
- `locationType` in config must be "hash".
- [`require` and `module`][removeRequire] need to be removed from window

[removeRequire]: https://github.com/usecanvas/ember-electron/blob/7792722761301617a2bc685413e2261b227fc328/app/index.html#L10-L14
