import { Job, Company } from "./db.js";
export const resolvers = {
  Query: {
    company: (_root, { id }) => {
      return Company.findById(id);
    },
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
