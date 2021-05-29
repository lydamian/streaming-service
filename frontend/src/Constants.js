export default {
  RAYA_BACKEND_HOSTNAME: process.env.REACT_APP_RAYA_BACKEND_HOSTNAME,
  DEBUG: process.env.REACT_APP_DEBUG === 'true',
  dashboard: {
    sections: {
      APPLICANTS: 'APPLICANTS',
      ADMIN_COMMANDS: 'ADMIN_COMMANDS',
    },
  },
};
