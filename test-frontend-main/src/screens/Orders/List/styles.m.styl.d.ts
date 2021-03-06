import { string } from "fp-ts";

declare namespace StylesMStylNamespace {
  export interface IStylesMStyl {
    screen: string;
    screenWrapper: string;
    table: string;
    head: string;
    row: string;
    body: string;
    pagination: string;
  }
}

declare const StylesMStylModule: StylesMStylNamespace.IStylesMStyl & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesMStylNamespace.IStylesMStyl;
};

export = StylesMStylModule;
