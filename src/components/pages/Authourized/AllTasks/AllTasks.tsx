import AuthourizedLayout from "../../../layouts/AuthourizedLayout";
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const AllTasks = () => {

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Todo`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: '2',
      label: `Inprogress`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `Completed`,
      children: `Content of Tab Pane 3`,
    },
  ];


  return (
    <AuthourizedLayout>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </AuthourizedLayout>
  );
};

export default AllTasks;
