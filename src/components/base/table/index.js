import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Text from '../text';
import {
  EmptyTable,
  CustomTable,
  EmptyText,
  Test
} from './theme';
import Loader from '../loader';


const Table = ({
  data, columns, theme, loading, emptyMessage, hasActions,
}) => {
  if (loading) {
    return (
      <EmptyTable>
        <Loader type="v2" />
      </EmptyTable>
    );
  }

  if (!data || !data.length) {
    return <EmptyTable><EmptyText theme={theme}>{emptyMessage}</EmptyText></EmptyTable>;
  }

  const processedColumns = columns.map((el) => {
    if (el.cell) { return el; }
    return {
      ...el,
      cell: row => <Text px="0px" py="0px" type="primary" size="small">{row[el.selector]}</Text>,
    };
  });

  if (hasActions) {
    processedColumns.push({
      name: 'Actions',
      selector: 'Actions',
    });
  }


  return (<CustomTable theme={theme} data={data} columns={processedColumns} />);
};

Table.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  loading: PropTypes.bool,
  emptyMessage: PropTypes.string,
  theme: PropTypes.object.isRequired,
  hasActions: PropTypes.bool,
};

Table.defaultProps = {
  data: null,
  columns: null,
  loading: false,
  hasActions: true,
  emptyMessage: 'You have no content to display!',
};

export default withTheme(Table);
