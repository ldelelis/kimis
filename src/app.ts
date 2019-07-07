import {
  App
} from 'https://deno.land/x/alosaur/src/mod.ts'
const { cwd } = Deno

import {
  HomeArea
} from './areas/home/home.area.ts'

const app = new App({
  areas: [HomeArea]
})
app.useViewRender({
  type: 'dejs',
  basePath: `${cwd()}/src/templates/`
})

app.listen();