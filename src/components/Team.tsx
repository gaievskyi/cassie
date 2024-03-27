import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Team: React.FC = () => {
  interface Member {
    id: number
    firstName: string
    lastName: string
    img: string
    role: string
  }
  let members: Member[] = []

  members = [
    {
      id: 1,
      firstName: 'Alex',
      lastName: 'Morgan',
      img: 'https://img.freepik.com/free-photo/boy-filming-with-camcorder-yellow-scene_23-2148184888.jpg?w=996&t=st=1689979486~exp=1689980086~hmac=2602b335ebd75aa17b0f74924a469961b3bb18e0d33a79ecc8378fadd30a2412',
      role: 'Creative Director',
    },
    {
      id: 2,
      firstName: 'Hannah',
      lastName: 'Hill',
      img: 'https://img.freepik.com/free-photo/happy-girl-striped-shirt-holding-camera-french-female-model-taking-photos-blue-wall_197531-14457.jpg?w=2000&t=st=1690032750~exp=1690033350~hmac=76db5350bc32767733d1d19a9def291a9e5f2d05d83ac0bb2f135c3b25469bb1',
      role: 'Photographer',
    },
    {
      id: 3,
      firstName: 'Max',
      lastName: 'Paige',
      img: 'https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=2000&t=st=1689979631~exp=1689980231~hmac=57fcd7eb88074a05893885251e0eaf4393eb8b399c6e121964c80a5c07537533',
      role: 'Editor',
    },
    {
      id: 4,
      firstName: 'John',
      lastName: 'Anderson',
      img: 'https://img.freepik.com/free-photo/man-with-camera_23-2147689324.jpg?w=996&t=st=1689979231~exp=1689979831~hmac=6efcfaa29e16e88aba3d13b345e31b51da2ab5083943a3993995223d2a2cad9c',
      role: 'Photographer',
    },
  ]

  const transition = { duration: 3, ease: [0.43, 0.13, 0.23, 0.96] }

  return (
    <div className="team-container">
      <div className="team">
        <div className="top">
          <h1>PHOTOGRAPHY TEAM</h1>
          <h2>MEET OUR TEAM</h2>
        </div>
        <div className="cards">
          {members.map((member) => (
            <div className="card" key={member.id}>
              <Link to={`/profile/${member.id}`}>
                <div className="img">
                  <img src={member.img} />
                </div>
              </Link>
              <motion.div exit={{ opacity: 0 }} transition={transition} className="info">
                <h3>
                  {member.lastName} {member.firstName}
                </h3>
                <p>{member.role}</p>
                <div className="buttons">
                  <span>BE</span>
                  <span>LI</span>
                  <span>IG</span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
