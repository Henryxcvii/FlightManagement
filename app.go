package main

import (
	"context"
	"fmt"
	"io/ioutil"
	"net/http"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) GetMetar(icao string) string {
	url := "https://metar.vatsim.net/:icao"
	method := "GET"

	client := &http.Client{}
	req, err := http.NewRequest(method, url, nil)

	if err != nil {
		fmt.Println(err)
		return "ERROR"
	}
	req.Header.Add("Accept", "text/plain")

	res, err := client.Do(req)
	if err != nil {
		fmt.Println(err)
		return "ERROR"
	}
	defer res.Body.Close()

	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		fmt.Println(err)
		return "ERROR"
	}
	return string(body)
}
