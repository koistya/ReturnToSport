// services/checkInService.js
import db from '../db/db.js';

export const getCohortById = async (id) =>{
    return await db('cohorts')
        .where('id', id)
        .first();
}

export const getCheckInsForCohort = async (cohortId) =>{
    return await db('therapy_checkins')
        .join('users', 'therapy_checkins.user_id', '=', 'users.id')
        .join('user_cohorts', 'users.id', '=', 'user_cohorts.user_id')
        .where('user_cohorts.cohort_id', cohortId)
        .select('therapy_checkins.*'); // Selects all fields from therapy_checkins
}

