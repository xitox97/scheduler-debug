import { rest } from 'msw'

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    const data = [
      {
        id: 1,
        userId: 1,
        title: 'Hello world 1',
        body: 'body 1',
      },
      {
        id: 2,
        userId: 2,
        title: 'Hello world 2',
        body: 'body 2',
      },
      {
        id: 3,
        userId: 3,
        title: 'Hello world 3',
        body: 'body 3',
      },
    ]

    return res(ctx.status(200), ctx.json(data))
  }),
]
