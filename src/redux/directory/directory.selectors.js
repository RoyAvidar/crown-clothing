import {createSelector} from 'reselect';

const selecrDirectory = (state) => state.directory;

export const selectDirectorySections = createSelector(
    [selecrDirectory],
    directory => directory.sections
);