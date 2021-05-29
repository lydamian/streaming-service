import RayaAxiosClient from './rayaAxiosClient';

const getAllApplicants = async () => {
  // console.log('[applicantsService] getAllApplicants:');

  try {
    const response = await RayaAxiosClient.get('/api/admin/applicants?best_room=false&female=false&flush_list=false&friend_pass=false&male=false&page=1&page_size=10&sort_direction=-1&sort_property=created_at');
    // console.log(`[applicantsService] getAllApplicants: ${JSON.stringify({ ...response.data })}`);
    return {
      ...response.data,
      error: null,
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      token: null,
    };
  }
};

const getApplicants = async () => {
  // console.log('[applicantsService] fetchApplicants:');

  try {
    const response = await RayaAxiosClient.get('/api/admin/applicants?best_room=false&female=false&flush_list=false&friend_pass=false&male=false&page=1&page_size=10&sort_direction=-1&sort_property=created_at');
    // console.log(`[applicantsService] getAllApplicants: ${JSON.stringify({ ...response.data })}`);
    return {
      ...response.data,
      error: null,
      success: true,
    };
  } catch (error) {
    return {
      applicants: [],
      success: false,
      error: error.message,
      token: null,
    };
  }
};

export default {
  getAllApplicants,
  getApplicants,
};
