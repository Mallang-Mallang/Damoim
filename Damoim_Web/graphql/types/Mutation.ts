import {
  booleanArg,
  floatArg,
  intArg,
  nonNull,
  nullable,
  objectType,
  stringArg,
} from 'nexus';

export const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.field('createMeeting', {
      type: 'Meeting',
      args: {
        title: nonNull(stringArg()),
        meetingDate: nonNull(stringArg()),
        location: nonNull(stringArg()),
        lat: nonNull(floatArg()),
        lng: nonNull(floatArg()),
        category: nonNull(stringArg()),
        authorEmail: nonNull(stringArg()),
      },
      async resolve(
        _,
        { title, meetingDate, location, lat, lng, category, authorEmail },
        _ctx,
      ) {
        return await _ctx.prisma.meeting.create({
          data: {
            title,
            meetingDate,
            location,
            lat,
            lng,
            category,
            author: { connect: { email: authorEmail } },
          },
        });
      },
    });

    t.field('requestMeeting', {
      type: 'Request',
      args: {
        meetingId: nonNull(intArg()),
        requestName: nonNull(stringArg()),
        requestEmail: nonNull(stringArg()),
      },
      async resolve(_, { meetingId, requestName, requestEmail }, _ctx) {
        return await _ctx.prisma.request.create({
          data: {
            meetingId,
            requestName,
            requestEmail,
          },
        });
      },
    });

    t.field('confrimRequest', {
      type: 'Request',
      args: {
        requestId: nonNull(intArg()),
        confirm: nonNull(booleanArg()),
      },
      async resolve(_, { requestId, confirm }, _ctx) {
        return await _ctx.prisma.request.update({
          where: {
            id: requestId,
          },
          data: {
            confirm,
          },
        });
      },
    });

    t.field('deleteRequest', {
      type: 'Request',
      args: {
        requestId: nonNull(intArg()),
        requestEmail: nonNull(stringArg()),
      },
      async resolve(_, { requestId, requestEmail }, _ctx) {
        let isUserCheck = await _ctx.prisma.request.findMany({
          where: {
            AND: [{ id: requestId }, { requestEmail: requestEmail }],
          },
        });

        if (isUserCheck.length > 0) {
          return await _ctx.prisma.request.delete({
            where: {
              id: requestId,
            },
          });
        }
        return null;
      },
    });
  },
});
