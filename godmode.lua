local Players = game:GetService("Players")

-- Função para ativar Godmode permanente
local function activateGodmode(player)
	local character = player.Character
	if character and character:FindFirstChild("Humanoid") then
		local humanoid = character.Humanoid

		-- Marca que está em Godmode
		humanoid:SetAttribute("IsGodmode", true)

		-- Impede o jogador de perder vida
		humanoid:GetPropertyChangedSignal("Health"):Connect(function()
			if humanoid:GetAttribute("IsGodmode") and humanoid.Health < humanoid.MaxHealth then
				humanoid.Health = humanoid.MaxHealth
			end
		end)
	end
end

-- Ativa Godmode sempre que o player entrar ou respawnar
Players.PlayerAdded:Connect(function(player)
	player.CharacterAdded:Connect(function()
		task.wait(1) -- espera o personagem carregar
		activateGodmode(player)
	end)
end)
