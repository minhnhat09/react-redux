import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';

/* Tưởng tượng cả file này là một component lớn và ta phải định nghĩa cho nó hình dạng và tính năng của mỗi phần nhỏ trong component này
Redux đóng vai trò liên kết các hành động của toàn bộ các component trong app lại với nhau bằng  

*/
class CoursesPage extends React.Component {
    constructor(props, context){
        super(props, context);
    }

    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }

    render() {
        const {courses} = this.props;

        return (
            <div>
                <h1>Courses Page</h1>
                <CourseList courses={courses}/>
            </div>
        );
    }
    
}
CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);