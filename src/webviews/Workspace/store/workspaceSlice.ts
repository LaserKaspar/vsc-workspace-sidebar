import { createSlice } from '@reduxjs/toolkit';
import * as vscode from 'vscode';
import { getWsType } from '../helpers/getWsType';
import { WorkspaceState } from '../WorkspaceViewProvider.interface';
import { error } from './error';
import { fetch, fetchFulfilled, fetchPending, fetchRejected } from './fetch';
import { invalid } from './invalid';
import { list } from './list';
import { loading } from './loading';
import { setPersistedState } from './setPersistedState';
import { setSearchTerm } from './setSearchTerm';
import { setVisibleFiles } from './setVisibleFiles';
import { toggleFolderState } from './toggleFolderState';
import { toggleFolderStateBulk } from './toggleFolderStateBulk';

export const workspaceSlice = createSlice({
  initialState: {
    closedFolders: [],
    convertedFiles: [],
    error: '',
    files: false,
    fileTree: {},
    isFolderInvalid: false,
    search: '',
    selected: !!vscode.workspace.workspaceFile ? vscode.workspace.workspaceFile.fsPath : '',
    sort: 'ascending',
    state: 'loading',
    visibleFiles: [],
    wsType: getWsType(vscode.workspace.workspaceFile, vscode.workspace.workspaceFolders),
  } as WorkspaceState,
  extraReducers: (builder) => {
    builder.addCase(fetch.pending, fetchPending);
    builder.addCase(fetch.rejected, fetchRejected);
    builder.addCase(fetch.fulfilled, fetchFulfilled);
  },
  name: 'ws',
  reducers: {
    error,
    invalid,
    list,
    loading,
    setPersistedState,
    setSearchTerm,
    setVisibleFiles,
    toggleFolderState,
    toggleFolderStateBulk,
  },
});
