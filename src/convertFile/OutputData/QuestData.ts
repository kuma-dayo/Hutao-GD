import QuestReader from "#/BinOutput/Quest"
import QuestExcelConfig from "#/ExcelBinOutput/QuestExcelConfig"
import QuestDataGroup from "$DT/QuestData"
import Writer from "./writer"

export class QuestDataWriter extends Writer {
  declare data: QuestDataGroup

  constructor(ver: string) {
    super("QuestData", ver)
  }

  async generateData(): Promise<void> {
    this.data = {
      Quest: [],
    }

    const { data, version } = this

    const QuestExcelConfigLoader = QuestExcelConfig(version)
    const QuestLoader = QuestReader(version)

    await QuestExcelConfigLoader.load()
    await QuestLoader.loadDir()

    const { data: questExcelConfig } = QuestExcelConfigLoader
    const { data: quest } = QuestLoader

    for (const questExcel of questExcelConfig) {
      const questData = quest[questExcel.MainId.toString()]
      data.Quest.push({
        Id: questExcel.MainId,
        Series: questData?.Series,
        ChapterId: questData?.ChapterId,
        Type: questData?.Type,
        Talks: questData?.Talks,
        SubQuests: questData?.SubQuests,
      })
    }
  }
}

export default (ver: string) => new QuestDataWriter(ver)
