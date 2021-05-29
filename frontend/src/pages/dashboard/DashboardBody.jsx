/* eslint-disable */

import React from 'react';
import Applicants from 'pages/dashboard/applicants/Applicants';
import AdminCommands from 'pages/dashboard/admin-commands/AdminCommands';
import Constants from 'Constants';
import PropTypes from 'prop-types';
import SampleBulmaTable from 'samples/SampleBulmaTable';

const DashboardBody = ({ section }) => (
  <div>
    {
      // Switch Statement
      {
        [Constants.dashboard.sections.APPLICANTS]: <Applicants />,
        [Constants.dashboard.sections.ADMIN_COMMANDS]: <AdminCommands />,
      }[section] || <SampleBulmaTable />
    }
  </div>
);

DashboardBody.defaultProps = {
  section: '',
};
DashboardBody.propTypes = {
  section: PropTypes.string,
};

export default DashboardBody;
