import { Job, Company } from "./db.js";
export const resolvers = {
  Query: {
    jobs: () => {
      return Job.findAll();
    },
  },
  Job: {
    company: (job) => {
      return Company.findById(job.companyId);
    },
  },
};
