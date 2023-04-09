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
  Company: {
    jobs: (company) => {
      return Job.findAll((job) => job.companyId === company.id);
    },
  },
  Job: {
    company: (job) => {
      return Company.findById(job.companyId);
    },
  },
};
