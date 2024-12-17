
import { Button, Layout, Switch } from 'antd';
import useConfigStore from '../../store/config';
const { Header } = Layout;

const Headerbar = (props: { colorBgContainer: string }) => {
  const setAlgorithm = useConfigStore(state => state.setAlgorithm)
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
  return (
    <Header title='CeeCine Administrator' style={{ padding: 0, background: props.colorBgContainer }}>
      <div style={{ display: 'flex', alignItems: 'center', height: '100%', padding: "0 20px", justifyContent: 'space-between' }}>
        <h2>CeeCine Administrator</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Switch checkedChildren="Light" unCheckedChildren="Dark" defaultChecked onChange={(checked) => setAlgorithm(checked ? 'default' : 'dark')} />
          <p style={{ marginRight: 10 }}>GĐ Kha Minh</p>
          <img src="https://scontent.fsgn21-1.fna.fbcdn.net/v/t39.30808-1/318504647_897330191261797_1962544862379332894_n.jpg?stp=c0.115.960.960a_dst-jpg_s480x480_tt6&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeF-GTjbWRrwFWc_REhsyAUeVNioYoZI80pU2KhihkjzSkG29E5iaO41NYdv0p6MvYmr9O_h-s4HpWFpQ7X3ATeG&_nc_ohc=-NQlCufqE8UQ7kNvgHqwZyB&_nc_zt=24&_nc_ht=scontent.fsgn21-1.fna&_nc_gid=A36RaX5F4zFcGTaRolqdtp3&oh=00_AYCZZqk5YZvMxsiuk7ImvBY4YDGHqKrU3y-Yje-aJcLrug&oe=6751C8FC" alt="avatar" style={{ width: 40, height: 40 }} />
          <Button type="primary" onClick={handleLogout}>Logout</Button>
        </div>
      </div>
    </Header>
  )
}

export default Headerbar
