import { QuestData } from "$DT/BinOutput/Quest"
import Reader from "./reader"

export class QuestReader extends Reader {
  declare data: { [name: string]: QuestData }

  constructor(ver: string) {
    super("Quest", ver)
  }

  async loadDir(): Promise<void> {
    await super.loadDir()

    const { data } = <{ data: object }>this
    this.data = {}

    this.data = Object.assign(this.data, data)
  }
}

export default (ver: string) => new QuestReader(ver)
