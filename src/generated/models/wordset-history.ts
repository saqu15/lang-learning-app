/* tslint:disable */
/* eslint-disable */
export interface WordsetHistory {

  /**
   * Number of fails during working on the wordset.
   */
  fails?: number;

  /**
   * Date when the wordset history was finished.
   */
  finishDate?: string;

  /**
   * Source language for the wordset history.
   */
  languageFrom?: string;

  /**
   * Target language for the wordset history.
   */
  languageTo?: string;

  /**
   * Time elapsed while working on the wordset history in seconds.
   */
  timeElapsed?: number;

  /**
   * User ID associated with the wordset history.
   */
  userId?: string;

  /**
   * Wordset ID associated with the wordset history.
   */
  wordsetId?: string;
}
