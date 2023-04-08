import QuestExcelConfigList from "$DT/ExcelBinOutput/QuestExcelConfig"
import Reader from "./reader"

export class AvatarCurveExcelConfigReader extends Reader {
  declare data: QuestExcelConfigList

  constructor(ver: string) {
    super("QuestExcelConfigData", ver)
  }
}

export default (ver: string) => new AvatarCurveExcelConfigReader(ver)
