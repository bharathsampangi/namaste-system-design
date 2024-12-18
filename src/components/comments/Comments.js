import CommentBox from "./CommentBox"

const data = [
    {
        username: "Elon",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        replies: [
            {
                username: "Deepika",
                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            }
        ]
    }, 
    {
        username: "Peter",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        replies: [
            {
                username: 'Steve',
                comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                replies: [
                    {
                        username: 'Deepika',
                        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                    },
                    {
                        username: 'Peter',
                        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                        replies: [
                            {
                                username: "Deepika",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                            },
                            {
                                username: "Adam",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                            },
                            {
                                username: "Jason",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                            },
                            {
                                username: "Christian",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                            },
                            {
                                username: "Jason",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                            },
                            {
                                username: "Adam",
                                comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                            }
                        ]
                    },
                    {
                        username: 'Jason',
                        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                    }
                ]
            }
        ]
    }
]

const Comments = () => {
    return (
        <div>
            <CommentBox data={data}/>
        </div>
    )
}

export default Comments