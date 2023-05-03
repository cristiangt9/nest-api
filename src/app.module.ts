import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [TasksModule, TagsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
