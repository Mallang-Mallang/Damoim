import { GraphQLDateTime } from 'graphql-scalars';
import { asNexusMethod, nonNull, nullable, objectType, stringArg } from 'nexus';

export const GQLDate = asNexusMethod(GraphQLDateTime, 'date');

export const Meeting = objectType({
  name: 'Meeting',
  definition(t) {
    t.int('id');
    t.date('createdAt');
    t.string('title');
    t.string('category');
    t.string('location');
    t.float('lat');
    t.float('lng');
    t.string('meetingDate');
    t.field('author', {
      type: 'User',
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.meeting
          .findUnique({
            where: { id: _parent.id },
          })
          .author();
      },
    });
    t.list.field('requests', {
      type: 'Request',
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.request.findMany({
          where: { meetingId: _parent.id },
        });
      },
    });
  },
});
