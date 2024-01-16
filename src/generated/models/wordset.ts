/* tslint:disable */
/* eslint-disable */
import { Languages } from '../models/languages';
import { Word } from '../models/word';
export interface Wordset {

  /**
   * Description of wordset.
   */
  description?: string;

  /**
   * Wordset ID.
   */
  id?: string;

  /**
   * Source language of the wordset.
   */
  languageFrom?: Languages;

  /**
   * Target language of the wordset.
   */
  languageTo?: Languages;

  /**
   * Id of user added to wordset.
   */
  ownerId?: string;

  /**
   * User ID associated with the wordset.
   */
  userId?: string;

  /**
   * Author name.
   */
  userName?: string;
  words?: Array<Word>;

  /**
   * Name of the wordset.
   */
  wordsetName?: string;
}
