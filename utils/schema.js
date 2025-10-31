import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const MockInterview=pgTable('mock_interview',{
    id:serial('id').primaryKey(),
    jsonMockResp:text('jsonMockResp').notNull(),
    jobPosition:varchar('jobPosition').notNull(),
    jobDesc:varchar('jobDesc').notNull(),
    jobExperience:varchar('jobExperience').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt'),
    mockId:varchar('mockId').notNull()
})

// CREATE TABLE mock_interview (
//     id SERIAL PRIMARY KEY,
//     jsonMockResp TEXT NOT NULL,
//     jobPosition VARCHAR NOT NULL,
//     jobDesc VARCHAR NOT NULL,
//     jobExperience VARCHAR NOT NULL,
//     createdBy VARCHAR NOT NULL,
//     createdAt VARCHAR,
//     mockId VARCHAR NOT NULL
// );


export const UserAnswer = pgTable('userAnswer',{
    id:serial('id').primaryKey(),
    mockIdRef:varchar('mockId').notNull(),
    question:varchar('question').notNull(),
    correctAns:text('correctAns'),
    userAns:text('userAns'),
    feedback:text('feedback'),
    rating:varchar('rating'),
    userEmail:varchar('userEmail'),
    createdAt:varchar('createdAt')
})