/*
  Warnings:

  - You are about to drop the column `content` on the `Blog` table. All the data in the column will be lost.
  - Added the required column `description` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "content",
ADD COLUMN     "description" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "BlogContent" (
    "content_id" TEXT NOT NULL,
    "blog_id" TEXT NOT NULL,
    "index" INTEGER NOT NULL,
    "paragraph" TEXT,
    "image_url" TEXT,

    CONSTRAINT "BlogContent_pkey" PRIMARY KEY ("content_id")
);

-- AddForeignKey
ALTER TABLE "BlogContent" ADD CONSTRAINT "BlogContent_blog_id_fkey" FOREIGN KEY ("blog_id") REFERENCES "Blog"("blog_id") ON DELETE RESTRICT ON UPDATE CASCADE;
