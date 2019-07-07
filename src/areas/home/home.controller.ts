import {
  Controller,
  Content,
  Get,
  Param
} from 'https://deno.land/x/alosaur/src/mod.ts'
import { BaseController } from '../core/core.controller.ts'

@Controller('')
export class HomeController extends BaseController {
  controllerTemplatePath: string
  constructor() {
    super()
    this.controllerTemplatePath = 'home'
  }

  @Get('/')
  async index() {
    const indexTemplate: string = `${this.controllerTemplatePath}/index.ejs`
    const template = await this.renderWithOverlay(indexTemplate, {})
    return template
  }

  @Get('/:name')
  salute(@Param('name') name) {
    return Content(`sup mr ${name}`)
  }
}