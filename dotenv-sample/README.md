# dotenv

[dotenv](https://www.npmjs.com/package/dotenv)

[github](https://github.com/motdotla/dotenv)

```
$ tree -a ./
.
├── .env
├── .env.local
├── README.md
└── main.js

0 directories, 4 files
```

## 実行

```
$ node main.js
{
  YARN_VERSION: '1.22.5',
  HOSTNAME: '2658342e9744',
  PWD: '/var/local/app/dotenv-sample',
  HOME: '/root',
  NODE_VERSION: '14.17.4',
  TERM: 'xterm',
  SHLVL: '1',
  PATH: '/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin',
  _: '/usr/local/bin/node',
  OLDPWD: '/var/local/app',
  DOTENV_LOCAL_LEVEL1: 'debug',
  DOTENV_LOCAL_LEVEL2: 'test',
  IS_OVERWRITTEN: 'no-no-no',
  DOTENV_LEVEL1: 'fuga',
  DOTENV_LEVEL2: 'fuga2'
}
```
