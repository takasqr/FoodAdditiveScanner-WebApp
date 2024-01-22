import dayjs from 'dayjs';
import 'dayjs/locale/ja'; // 日本語ロケール
import 'dayjs/locale/en'; // 英語ロケール
// 必要に応じて他のロケールもインポート

class CalendarService {
  private locale: string;

  /**
   * CalendarService の新しいインスタンスを作成
   * @param {string} locale - ロケール（例: "ja", "en"）。
   */
  constructor(locale: string = 'en') {
    this.locale = locale;
  }

  /**
   * 指定された日付の月をインスタンスのロケールでフォーマットして返す
   * @param {Date | string} [date] - 日付。省略可能。
   * @return {string} 指定されたロケールでフォーマットされた月の名前 (文字列)
   */
  getLocaleFormattedMonth(date?: Date | string): string {
    dayjs.locale(this.locale); // インスタンスのロケールを使用
    return dayjs(date).format('MMMM');
  }
}

export default CalendarService;