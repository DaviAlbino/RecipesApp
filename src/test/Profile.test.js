import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';
import Profile from '../Pages/Profile';

describe('Teste do Profile', () => {
  it('45% requisito 57 e 59', () => {
    renderWithRouter(<Profile />);
    const profileEmail = screen.getByTestId('profile-email');
    const profileBtn = screen.getByTestId('profile-done-btn');
    const favoriteBtn = screen.getByTestId('profile-favorite-btn');

    expect(profileEmail).toBeInTheDocument();
    expect(profileBtn).toBeInTheDocument();
    expect(favoriteBtn).toBeInTheDocument();
  });

  it('teste profile-email requisito 58', () => {
    // const userEmailTest = [
    //   {
    //     email: 'leandrojamir@yahoo.com.br',
    //   }];
    // const initialState = localStorage.setItem('user', JSON.stringify(userEmailTest));
    // localStorage.clear();
    // renderWithRouter(<App />, initialState);

    const { history } = renderWithRouter(<App />);
    const inputEmail = screen.getByPlaceholderText(/email/i);
    userEvent.type(inputEmail, 'leandrojamir@yahoo.com.br');
    const inputPassword = screen.getByPlaceholderText(/password/i);
    userEvent.type(inputPassword, '1234567');
    const buttonEnter = screen.getByRole('button', { name: /entrar/i });
    userEvent.click(buttonEnter);
    const profileBtn = screen.getByTestId('profile-top-btn');
    userEvent.click(profileBtn);

    const profileEmail = screen.getByTestId('profile-email');
    expect(profileEmail).toBeDefined();
    expect(profileEmail).toHaveTextContent('usuário: leandrojamir@yahoo.com.br');

    // adcionando teste da linha 32 para fechar 100%
    const profileDoneBtn = screen.getByTestId('profile-done-btn');
    userEvent.click(profileDoneBtn);
    const { location: { pathname } } = history;

    expect(pathname).toBe('/done-recipes');
  });

  it('teste requisito 61 caminho completo', () => {
    const { history } = renderWithRouter(<App />);
    const inputEmail = screen.getByPlaceholderText(/email/i);
    userEvent.type(inputEmail, 'teste@teste.com');
    const inputPassword = screen.getByPlaceholderText(/password/i);
    userEvent.type(inputPassword, '1234567');
    const buttonEnter = screen.getByRole('button', { name: /entrar/i });
    userEvent.click(buttonEnter);
    const profileBtn = screen.getByTestId('profile-top-btn');
    userEvent.click(profileBtn);
    const favoriteBtn = screen.getByTestId('profile-favorite-btn');
    userEvent.click(favoriteBtn);
    const { location: { pathname } } = history;

    expect(pathname).toBe('/favorite-recipes');
  });
});