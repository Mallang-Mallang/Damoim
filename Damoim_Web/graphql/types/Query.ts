import { booleanArg, intArg, nonNull, objectType, stringArg } from 'nexus';

export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.field('meeting', {
      type: 'Meeting',
      args: {
        locationId: nonNull(intArg()),
      },
      async resolve(_, _args, ctx) {
        return await ctx.prisma.meeting.findUnique({
          where: { id: Number(_args.locationId) },
        });
      },
    });
    t.list.field('meetings', {
      type: 'Meeting',
      async resolve(_, _args, _ctx) {
        return await _ctx.prisma.meeting.findMany();
      },
    });
    t.list.field('myMeeting', {
      type: 'Meeting',
      args: {
        userEmail: nonNull(stringArg()),
      },
      async resolve(_parents, _args, _ctx) {
        return await _ctx.prisma.meeting.findMany({
          where: {
            authorEmail: _args.userEmail,
          },
        });
      },
    });
    t.field('filterMyMeeting', {
      type: 'Meeting',
      args: {
        authorEmail: nonNull(stringArg()),
      },
      async resolve(_parents, _args, _ctx) {
        return await _ctx.prisma.meeting.findFirst({
          where: {
            authorEmail: _args.authorEmail,
          },
          orderBy: { id: 'desc' },
        });
      },
    });

    t.list.field('myMeetings', {
      type: 'Meeting',
      args: {
        userEmail: nonNull(stringArg()),
        date: nonNull(stringArg()),
      },
      async resolve(_parents, _args, _ctx) {
        return await _ctx.prisma.meeting.findMany({
          where: {
            AND: [
              { authorEmail: _args.userEmail },
              {
                meetingDate: {
                  contains: String(_args.date),
                },
              },
            ],
          },
        });
      },
    });
    t.list.field('searchMeetings', {
      type: 'Meeting',
      args: {
        searchword: nonNull(stringArg()),
      },
      async resolve(_, _args, _ctx) {
        return await _ctx.prisma.meeting.findMany({
          where: {
            OR: [
              { title: { contains: String(_args.searchword) } },

              { meetingDate: { contains: String(_args.searchword) } },
            ],
          },
        });
      },
    });
    t.list.field('myRequests', {
      type: 'Request',
      args: {
        userEmail: nonNull(stringArg()),
      },
      async resolve(_parents, _args, _ctx) {
        return await _ctx.prisma.request.findMany({
          where: {
            requestEmail: _args.userEmail,
          },
        });
      },
    });
  },
});
