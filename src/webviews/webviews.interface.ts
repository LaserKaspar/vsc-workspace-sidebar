import * as vscode from 'vscode';

export type WebviewTypes = 'vsc-workspace-sidebar-webview-workspace';

export type PostMessageActions = 'todo...';

export interface PostMessage<T> {
  action: PostMessageActions;
  payload: T;
}

export interface GetTemplate {
  cspSource: string;
  cssFolderUri: vscode.Uri;
  nonce: string;
  scriptFolderUri: vscode.Uri;
}

export interface GetHtml<TState> {
  extensionPath: vscode.Uri;
  template: (args: GetTemplate, data: TState) => string;
  htmlData: HtmlData<TState>;
}

export interface HtmlData<TState> {
  data: TState;
  webview: vscode.Webview;
}