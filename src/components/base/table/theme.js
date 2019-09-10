import styled from 'styled-components';
import DataTable from 'react-data-table-component';
import { THEME_TYPES } from '../../../styles/colors';

export const getBorderColor = theme => (theme.mode === THEME_TYPES.DARK ? theme.colors.inputgrey : theme.colors.lightgrey);
export const getHeaderFontColor = theme => (theme.colors.textcolor);
export const getEmptyTableColor = theme => (theme.mode === THEME_TYPES.DARK ? theme.colors.inputgrey : theme.colors.lightgrey);

export const EmptyTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 9.5rem;
  border-radius: 3px;
  background-color: ${({ theme }) => getEmptyTableColor(theme)};
`;

export const CustomTable = styled(DataTable)`
  .rdt_TableHeadRow {
    background-color: ${({ theme }) => getBorderColor(theme)};
    font-family: 'Lato', sans-serif;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    min-height: 36px;
  }
  
  .rdt_TableHeader {
    display: none;
  }

  .rdt_TableCol .rdt_TableCol_Sortable {
    font-weight: bold;
    font-size: 14px;
    color: ${({ theme }) => getHeaderFontColor(theme)}
  }

  .rdt_TableRow {
    border: 2px solid ${({ theme }) => getBorderColor(theme)};
    border-top: none;
    min-height: 36px;
  }

  .rdt_TableCell div:first-child {
    overflow: inherit;
  }
`;

export const EmptyText = styled(Text)`
  color: ${({ theme }) => theme.colors.darkgrey};
`;

export const Test = styled.div`
    background-color: red;
  mask-image: url(data:image/svg;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uO3RleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjtpbWFnZS1yZW5kZXJpbmc6b3B0aW1pemVRdWFsaXR5OyIgdmlld0JveD0iMCAwIDEwMCAxMjUiIHg9IjBweCIgeT0iMHB4IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCI+PGc+PGNpcmNsZSBjbGFzcz0iZmlsbCIgY3g9IjUwIiBjeT0iMTciIHI9IjEwIi8+PGNpcmNsZSBjbGFzcz0iZmlsbCIgY3g9IjUwIiBjeT0iNDkiIHI9IjEwIi8+PGNpcmNsZSBjbGFzcz0iZmlsbCIgY3g9IjUwIiBjeT0iODMiIHI9IjEwIi8+PC9nPjwvc3ZnPg==);
  -webkit-mask-image: url(data:image/svg;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uO3RleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjtpbWFnZS1yZW5kZXJpbmc6b3B0aW1pemVRdWFsaXR5OyIgdmlld0JveD0iMCAwIDEwMCAxMjUiIHg9IjBweCIgeT0iMHB4IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCI+PGc+PGNpcmNsZSBjbGFzcz0iZmlsbCIgY3g9IjUwIiBjeT0iMTciIHI9IjEwIi8+PGNpcmNsZSBjbGFzcz0iZmlsbCIgY3g9IjUwIiBjeT0iNDkiIHI9IjEwIi8+PGNpcmNsZSBjbGFzcz0iZmlsbCIgY3g9IjUwIiBjeT0iODMiIHI9IjEwIi8+PC9nPjwvc3ZnPg==);
`;
