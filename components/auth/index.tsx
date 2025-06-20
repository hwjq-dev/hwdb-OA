import { PasswordInput } from '../molecules/password-input';
import { Button } from '../ui/button';

export const LoginScreen = () => {
  return (
    <div className="relative size-full bg-gradient-to-b from-primary to-gray-800 flex justify-center items-center">
      <div className="relative bg-white shadow-2xl w-5/6 p-7 rounded-2xl">
        <div className="bg-[#2a4d7a] absolute top-1/2 -translate-y-1/2 -left-5 size-7 rounded-sm" />
        <div className="bg-[#2a4d7a] absolute top-1/2 -translate-y-1/2 -right-5 size-7 rounded-sm" />

        <div>
          <h2 className="text-2xl font-bold">欢迎来到好旺OA</h2>
          <p className="text-dark">在下面框请提供您登陆密码</p>
        </div>
        <form className="mt-4">
          <PasswordInput className="mb-4" placeholder="请输入登陆密码" />
          <Button className="w-full">立即登陆</Button>
        </form>
      </div>
      {/*-- Will be omited --*/}
    </div>
  );
};
