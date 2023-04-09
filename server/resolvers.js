import { Job, Company } from "./db.js";
export const resolvers = {
  Query: {
    job: (_root, args) => {
      return Job.findById(args.id);
    },
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
