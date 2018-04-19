export const resolveRoute = (project, tab) => {
    const page = 'project'

    const route = {
        project: {
            tasks: 'project',
            timeline: 'timelineForProject',
            analytics: 'analyticsForProject',
            calendar: 'calendarForProject',
            files: 'filesForProject'
        }
    }

    const routeName = route[page][tab]

    if (!routeName) throw new Error('Invalid tab: ' + tab)
    return {
        name: routeName,
        options: {
            projectId: project._id
        }
    }
}
