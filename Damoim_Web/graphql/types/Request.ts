import { objectType } from 'nexus';

export const Request = objectType({
  name: 'Request',
  definition(t) {
    t.int('id');
    t.date('createdAt');
    t.field('meeting', {
      type: 'Meeting',
      async resolve(_parent, _args, _ctx) {
        return await _ctx.prisma.meeting.findUnique({
          where: { id: _parent.meetingId },
        });
      },
    });
    t.int('meetingId');
    t.string('requestEmail');
    t.boolean('confirm');
  },
});
