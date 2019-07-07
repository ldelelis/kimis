// import {
//   renderFile
// 
// } from 'https://deno.land/x/dejs@0.2.2/dejs.ts'
import {
  View
} from 'https://deno.land/x/alosaur/src/mod.ts'
const { cwd } = Deno

export class BaseController {
  templatePath: string
  overlayName: string

  constructor() {
    this.templatePath = `${cwd()}/src/templates`
    this.overlayName = `overlay`
  }

  async renderWithOverlay(template: string, context: any) {
    const params = {
      context,
      template: `${this.templatePath}/${template}`
    }
    const output = await View(this.overlayName, params)
    return output
  }
}