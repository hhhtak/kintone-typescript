declare namespace kintone.types {
  interface Fields {
    ID: kintone.fieldTypes.SingleLineText;
    ルックアップ: kintone.fieldTypes.SingleLineText;
    文字列: kintone.fieldTypes.SingleLineText;
    単価: kintone.fieldTypes.Number; // 単価フィールドを追加 (数値型と仮定)
    ユーザー選択: kintone.fieldTypes.UserSelect; // ユーザー選択フィールドを追加
  }
  interface SavedFields extends Fields {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    更新者: kintone.fieldTypes.Modifier;
    作成者: kintone.fieldTypes.Creator;
    レコード番号: kintone.fieldTypes.RecordNumber;
    更新日時: kintone.fieldTypes.UpdatedTime;
    作成日時: kintone.fieldTypes.CreatedTime;
  }
}
