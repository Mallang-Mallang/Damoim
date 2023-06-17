import { nonNull, objectType, stringArg } from 'nexus';

export const Query = objectType({
  name: 'Query',
  definition(t) {
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
  },
});
